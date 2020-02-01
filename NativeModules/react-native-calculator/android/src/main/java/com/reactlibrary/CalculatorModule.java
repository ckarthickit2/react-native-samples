package com.reactlibrary;

import android.os.Handler;
import android.os.Looper;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import javax.annotation.Nullable;

public class CalculatorModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private final ReactApplicationContext reactContext;

  //custom instance variables
  private final Handler mHandler;
  private final String[] randomFruits = {"Apple", "Orange", "Guava", "Cherry", "Strawberry",
      "Pineapple"};

  public CalculatorModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
    mHandler = new Handler(Looper.getMainLooper());
    reactContext.addLifecycleEventListener(this);
  }


  @Override
  public String getName() {
    return "Calculator";
  }

  @ReactMethod
  public void tryPing(String stringArgument, int numberArgument, Callback callback) {
    WritableMap map = new WritableNativeMap();
    WritableArray messages = new WritableNativeArray();
    messages.pushString("Hello");
    messages.pushString("World");
    map.putString("stringArgument", stringArgument);
    map.putInt("numberArgument", numberArgument);
    map.putArray("arrayMessages", messages);
    callback.invoke(map);
  }

  @ReactMethod
  public void ping(String stringArgument, int numberArgument, Promise promise) {
    WritableMap map = new WritableNativeMap();
    WritableArray messages = new WritableNativeArray();
    messages.pushString("Hello");
    messages.pushString("World");
    map.putString("stringArgument", stringArgument);
    map.putInt("numberArgument", numberArgument);
    map.putArray("arrayMessages", messages);
    promise.resolve(map);
  }


  //region event-emitter
  private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }
  //endregion

  @Override
  public void onHostResume() {
    mHandler.postDelayed(new Runnable() {
      @Override
      public void run() {
        String randomFruit = randomFruits[(int) (Math.random() * randomFruits.length * 100) % randomFruits.length];
        WritableMap map = new WritableNativeMap();
        map.putString("randomFruit", randomFruit);
        sendEvent(reactContext,"FruitEvent", map);
        mHandler.removeCallbacks(this);
        mHandler.postDelayed(this, 1000);
      }
    }, 500);
  }

  @Override
  public void onHostPause() {
    mHandler.removeCallbacksAndMessages(null);
  }

  @Override
  public void onHostDestroy() {

  }
}
