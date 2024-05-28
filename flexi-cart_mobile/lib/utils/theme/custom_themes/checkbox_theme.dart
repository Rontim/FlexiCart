import 'package:flutter/material.dart';

class FCheckboxTheme {
  FCheckboxTheme._();

  static CheckboxThemeData lightCheckboxTheme = CheckboxThemeData(
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4.0)),
    checkColor: MaterialStateColor.resolveWith((states) {
      if (states.contains(MaterialState.disabled)) {
        return Colors.white;
      } else {
        return Colors.black;
      }
    }),
    fillColor: MaterialStateColor.resolveWith((states) {
      if (states.contains(MaterialState.disabled)) {
        return Colors.blue;
      } else {
        return Colors.transparent;
      }
    }),
  );
  static CheckboxThemeData darkCheckboxTheme = CheckboxThemeData(
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4.0)),
    checkColor: MaterialStateColor.resolveWith((states) {
      if (states.contains(MaterialState.disabled)) {
        return Colors.white;
      } else {
        return Colors.black;
      }
    }),
    fillColor: MaterialStateColor.resolveWith((states) {
      if (states.contains(MaterialState.disabled)) {
        return Colors.blue;
      } else {
        return Colors.transparent;
      }
    }),
  );
}
