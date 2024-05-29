import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FCheckboxTheme {
  FCheckboxTheme._();

  static CheckboxThemeData lightCheckboxTheme = CheckboxThemeData(
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.xs)),
    checkColor: WidgetStateColor.resolveWith((states) {
      if (states.contains(WidgetState.disabled)) {
        return FColors.white;
      } else {
        return FColors.black;
      }
    }),
    fillColor: WidgetStateColor.resolveWith((states) {
      if (states.contains(WidgetState.disabled)) {
        return FColors.primaryColor;
      } else {
        return Colors.transparent;
      }
    }),
  );
  static CheckboxThemeData darkCheckboxTheme = CheckboxThemeData(
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.xs)),
    checkColor: WidgetStateColor.resolveWith((states) {
      if (states.contains(WidgetState.disabled)) {
        return FColors.white;
      } else {
        return FColors.black;
      }
    }),
    fillColor: WidgetStateColor.resolveWith((states) {
      if (states.contains(WidgetState.disabled)) {
        return FColors.primaryColor;
      } else {
        return Colors.transparent;
      }
    }),
  );
}
