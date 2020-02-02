package com.reactlibrary.ui;

import android.graphics.Color;
import android.util.Log;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class TextLabelManager extends SimpleViewManager<TextView> {

  public static final String REACT_CLASS = "RCTTextLabel";

  @NonNull
  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @NonNull
  @Override
  protected TextView createViewInstance(@NonNull ThemedReactContext reactContext) {
    ///Fresco.newDraweeControllerBuilder();
    TextView textView = new RCTTextView(reactContext);
    //Assuming the Flex Container View will control it's width and height.
//     textView
//         .setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
//    textView.setText("NODATA");
//    textView.setWidth(100);
//    textView.setHeight(100);
    Log.i("TextLabel", "creating textView");
    return textView;
  }

  @ReactProp(name = "text")
  public void setText(TextView textView, @Nullable String text) {
    Log.i("TextLabel", "setText: " + text);
    if (text == null) {
      return;
    }
    textView.setText(text);
  }

  @ReactProp(name = "colour")
  public void setColour(TextView textView, @Nullable String colorString) {
    Log.i("TextLabel", "setColor: " + colorString);
    textView.setTextColor(Color.parseColor(colorString));
  }

  @ReactProp(name = "backgroundColour")
  public void setBackgroundColour(TextView textView, @Nullable String colorString) {
    Log.i("TextLabel", "setBackgroundColor: " + colorString);
    textView.setBackgroundColor(Color.parseColor(colorString));
  }

  //Assuming the Flex Container View will control it's width and height.
//  @ReactProp(name = "justifyContent")
//  public void setJustifyContent(TextView textView, @Nullable String justifyContent) {
//
//  }

}
