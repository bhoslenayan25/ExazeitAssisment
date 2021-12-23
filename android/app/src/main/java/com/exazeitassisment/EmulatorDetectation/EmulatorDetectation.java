package com.exazeitassisment.EmulatorDetectation;

import android.content.Intent;
import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;

public class EmulatorDetectation extends ReactContextBaseJavaModule {

    private String TAG = EmulatorDetectation.class.getSimpleName();

    public EmulatorDetectation(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "EmulatorDetectation";
    }

    @ReactMethod
    public void isRunningOnEmulator(Promise promise) {
        promise.resolve(isGenymotionEmulator(Build.MANUFACTURER) || buildModelContainsEmulatorHints(Build.MODEL));
    }

    public boolean isGenymotionEmulator(String buildManufacturer) {
        return buildManufacturer != null &&
                (buildManufacturer.contains("Genymotion") || buildManufacturer.equals("unknown"));
    }

    public boolean buildModelContainsEmulatorHints(String buildModel) {
        return buildModel.startsWith("sdk")
                || "google_sdk".equals(buildModel)
                || buildModel.contains("Emulator")
                || buildModel.contains("Android SDK");
    }

}
