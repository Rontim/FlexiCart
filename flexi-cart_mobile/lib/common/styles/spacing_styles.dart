import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FSpacingStyles {
  FSpacingStyles._();

  static const EdgeInsetsGeometry paddingWithAppBarHeight = EdgeInsets.only(
    top: FSizes.appBarHeight,
    right: FSizes.defaultSpace,
    bottom: FSizes.defaultSpace,
    left: FSizes.defaultSpace,
  );
}
