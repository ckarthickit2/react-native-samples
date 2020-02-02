package com.reactlibrary.ui;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.TextView;
import androidx.annotation.Nullable;

@SuppressLint("AppCompatCustomView")
public class RCTTextView extends TextView {
  private static final String TAG = "RCTTextViewDBG";
  public RCTTextView(Context context) {
    super(context);
    Log.i(TAG,"RCTTextView constructed");
  }

  public RCTTextView(Context context, @Nullable AttributeSet attrs) {
    super(context, attrs);
  }

  public RCTTextView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
    super(context, attrs, defStyleAttr);
  }

  @TargetApi(value = 27)
  public RCTTextView(Context context, @Nullable AttributeSet attrs, int defStyleAttr,
      int defStyleRes) {
    super(context, attrs, defStyleAttr, defStyleRes);
  }

  @Override
  public void setWidth(int pixels) {
    super.setWidth(pixels);
    Log.i(TAG, "setWidth=" + pixels);
    new Exception().printStackTrace();
  }

  @Override
  protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    Log.i(TAG, String.format("onMeasure widthMeasureSpec=%d, heightMeasureSpec=%d",widthMeasureSpec, heightMeasureSpec));
    new Exception().printStackTrace();
  }

  @Override
  protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
    super.onLayout(changed, left, top, right, bottom);
    Log.i(TAG, String.format("onLayout left=%d, top=%d",left, top));
    new Exception().printStackTrace();
  }
}
