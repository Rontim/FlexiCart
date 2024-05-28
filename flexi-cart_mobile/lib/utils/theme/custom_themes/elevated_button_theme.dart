import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FElevatedButtonTheme {
  FElevatedButtonTheme._();

  static ElevatedButtonThemeData lightElevatedButtonTheme = ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      elevation: 0,
      foregroundColor: FColors.light,
      backgroundColor: FColors.primaryColor,
      disabledForegroundColor: FColors.darkGrey,
      disabledBackgroundColor: FColors.buttonDisabled,
      side: const BorderSide(color: FColors.primaryColor),
      padding: const EdgeInsets.symmetric(vertical: FSizes.buttonHeight),
      textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: Colors.white),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.buttonRadius)),
    ),
  );
  static ElevatedButtonThemeData darkElevatedButtonTheme = ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      elevation: 0,
      foregroundColor: FColors.light,
      backgroundColor: FColors.primaryColor,
      disabledForegroundColor: FColors.darkGrey,
      disabledBackgroundColor: FColors.darkerGrey,
      side: const BorderSide(color: FColors.primaryColor),
      padding: const EdgeInsets.symmetric(vertical: FSizes.buttonHeight),
      textStyle:
          const TextStyle(fontSize: 16, color: FColors.textWhite, fontWeight: FontWeight.w600),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(FSizes.buttonRadius)),
    ),
  );
}
