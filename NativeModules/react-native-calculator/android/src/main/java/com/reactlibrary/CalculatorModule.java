package com.reactlibrary;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CalculatorModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public CalculatorModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Calculator";
    }

    @ReactMethod
    public void tryPing(String stringArgument, int numberArgument, Callback callback) {
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void ping(String stringArgument, int numberArgument, Promise promise) {
        promise.resolve("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }
}
