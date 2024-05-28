import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flutter/material.dart';

class FChipTheme {
  FChipTheme._();

  static ChipThemeData lightChipTheme = ChipThemeData(
    disabledColor: FColors.grey.withOpacity(0.4),
    labelStyle: const TextStyle(color: FColors.black),
    selectedColor: FColors.primaryColor,
    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
    checkmarkColor: FColors.white,
  );

  static ChipThemeData darkChipTheme = const ChipThemeData(
    disabledColor: FColors.grey,
    labelStyle: TextStyle(color: FColors.white),
    selectedColor: FColors.primaryColor,
    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 12),
    checkmarkColor: FColors.white,
  );
}
