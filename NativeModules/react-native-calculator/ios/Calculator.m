#import "Calculator.h"
#import <React/RCTConvert.h>
#import <stdlib.h>

NSString *const FRUIT_EVENT = @"FruitEvent";

@interface Calculator() //Extension
@property(nonatomic) BOOL hasJobStarted;
@property dispatch_queue_t serial_queue;
@property dispatch_block_t randomFruitGenerator;
@end
@implementation Calculator {
//    dispatch_queue_t serial_queue;
//    dispatch_block_t randomFruitGenerator;
//    BOOL hasJobStarted;
//    NSArray<NSString*> *randomFruits;
}

RCT_EXPORT_MODULE()

- (instancetype)init {
    if(self = [super init]) {
        self.serial_queue = dispatch_queue_create("native_queue", DISPATCH_QUEUE_SERIAL);
        self.hasJobStarted = NO;
        NSArray *randomFruits = @[@"Apple", @"Orange", @"Guava", @"Cherry", @"Strawberry",
        @"Pineapple"];
        __weak __typeof(self) weakSelf = self;
        self.randomFruitGenerator = ^{
            uint32_t randomFruitsCount = (uint32_t)[randomFruits count];
            NSString *randomFruit = randomFruits[arc4random_uniform(randomFruitsCount)];
            NSDictionary *dict = @{@"randomFruit": randomFruit};
            [weakSelf sendEventWithName:FRUIT_EVENT body:dict];
            //KeepOn inv
            if(weakSelf.hasJobStarted) {
                dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), weakSelf.serial_queue,weakSelf.randomFruitGenerator);
            }
        };
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

RCT_EXPORT_METHOD(tryPing:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    NSMutableDictionary *dictionary = [[NSMutableDictionary alloc] init];
    [dictionary setValue:stringArgument forKey:@"stringArgument"];
    [dictionary setValue:numberArgument forKey:@"numberArgument"];
    [dictionary setValue:@[@"Hello",@"World"] forKey:@"arrayMessages"];
    callback(@[dictionary]); //Must be an NSArray
}

RCT_EXPORT_METHOD(ping:(NSString *)stringArgument
                  numberParameter:(nonnull NSNumber *)numberArgument resolver:(RCTPromiseResolveBlock)resolver rejector:(RCTPromiseRejectBlock)rejector)
{
    NSMutableDictionary *dictionary = [[NSMutableDictionary alloc] init];
    [dictionary setValue:stringArgument forKey:@"stringArgument"];
    [dictionary setValue:numberArgument forKey:@"numberArgument"];
    [dictionary setValue:@[@"Hello",@"World"] forKey:@"arrayMessages"];
    resolver(dictionary); //Any Single Object is enough.
}

#pragma mark event-emitter

- (NSArray<NSString *> *)supportedEvents {
    return @[FRUIT_EVENT];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    if(!self.hasJobStarted) {
        self.hasJobStarted = YES;
        dispatch_async(self.serial_queue, self.randomFruitGenerator);
    }
}

-(void)stopObserving {
    self.hasJobStarted = NO;
}

@end
