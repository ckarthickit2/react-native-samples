//
//  TextLabelManager.m
//  Calculator
//
//  Created by Karthick C on 02/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "TextLabelManager.h"

@implementation TextLabelManager

RCT_EXPORT_MODULE(RCTTextLabel)

-(UIView *)view {
    return [[UILabel alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(text,NSString*)

RCT_CUSTOM_VIEW_PROPERTY(colour,NSString*, UILabel) {
    NSString *colourString = [RCTConvert NSString:json];
    UIColor *color = [TextLabelManager colorFromHexString:colourString];
    [view setTextColor:color];
}

RCT_CUSTOM_VIEW_PROPERTY(backgroundColour, NSString*, UILabel) {
    NSString *colourString = [RCTConvert NSString:json];
    UIColor *color = [TextLabelManager colorFromHexString:colourString];
    [view setBackgroundColor:color];
}



+ (UIColor *)colorFromHexString:(NSString *)hexString {
    unsigned rgbValue = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    [scanner setScanLocation:1]; // bypass '#' character
    [scanner scanHexInt:&rgbValue];
    return [UIColor colorWithRed:((rgbValue & 0xFF0000) >> 16)/255.0 green:((rgbValue & 0xFF00) >> 8)/255.0 blue:(rgbValue & 0xFF)/255.0 alpha:1.0];
}
@end
