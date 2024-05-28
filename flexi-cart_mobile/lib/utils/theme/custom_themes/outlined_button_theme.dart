import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FOutlinedButtonTheme {
  FOutlinedButtonTheme._();

  static final lightOutlinedButtonTheme = OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      elevation: 0,
      foregroundColor: FColors.dark,
      side: const BorderSide(color: FColors.borderPrimary),
      textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: FColors.black),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.buttonRadius)),
      padding: const EdgeInsets.symmetric(vertical: FSizes.buttonHeight, horizontal: 20),
    ),
  );

  static final darkOutlinedButtonTheme = OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      elevation: 0,
      foregroundColor: FColors.light,
      side: const BorderSide(color: FColors.borderPrimary),
      textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: FColors.white),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.buttonRadius)),
      padding: const EdgeInsets.symmetric(vertical: FSizes.buttonHeight, horizontal: 20),
    ),
  );
}
