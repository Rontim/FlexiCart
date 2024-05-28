import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/appbar_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/bottom_sheet_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/checkbox_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/chip_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/elevated_button_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/outlined_button_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/text_field_theme.dart';
import 'package:flexi_cart_mobile/utils/theme/custom_themes/text_theme.dart';
import 'package:flutter/material.dart';

class FAppTheme {
  FAppTheme._();

  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    fontFamily: 'Poppins',
    brightness: Brightness.light,
    primaryColor: FColors.primaryColor,
    disabledColor: FColors.grey,
    scaffoldBackgroundColor: FColors.white,
    textTheme: FTextTheme.lightTextTheme,
    elevatedButtonTheme: FElevatedButtonTheme.lightElevatedButtonTheme,
    outlinedButtonTheme: FOutlinedButtonTheme.lightOutlinedButtonTheme,
    appBarTheme: FAppBarTheme.lightAppBarTheme,
    bottomSheetTheme: FBottomSheetTheme.lightBottomSheetTheme,
    checkboxTheme: FCheckboxTheme.lightCheckboxTheme,
    chipTheme: FChipTheme.lightChipTheme,
    inputDecorationTheme: FTextFormFieldTheme.lightInputDecorationTheme,
  );
  static ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    fontFamily: 'Poppins',
    brightness: Brightness.light,
    disabledColor: FColors.grey,
    primaryColor: FColors.primaryColor,
    scaffoldBackgroundColor: FColors.black,
    textTheme: FTextTheme.darkTextTheme,
    elevatedButtonTheme: FElevatedButtonTheme.darkElevatedButtonTheme,
    outlinedButtonTheme: FOutlinedButtonTheme.darkOutlinedButtonTheme,
    appBarTheme: FAppBarTheme.darkAppBarTheme,
    bottomSheetTheme: FBottomSheetTheme.darkBottomSheetTheme,
    checkboxTheme: FCheckboxTheme.darkCheckboxTheme,
    chipTheme: FChipTheme.darkChipTheme,
    inputDecorationTheme: FTextFormFieldTheme.darkInputDecorationTheme,
  );
}
