package com.reactlibrary;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CalculatorAltModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public CalculatorAltModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CalculatorAlt";
    }

    @ReactMethod
    public void pingCallback(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void pingPromise(String stringArgument, int numberArgument, Promise promise) {
        // TODO: Implement some actually useful functionality
        promise.resolve("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }
}
