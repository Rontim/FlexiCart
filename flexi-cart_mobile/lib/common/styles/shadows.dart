import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flutter/material.dart';

class FShadows {
  FShadows._();

  static BoxShadow verticalProductShadow = BoxShadow(
    color: FColors.darkGrey.withOpacity(0.1),
    blurRadius: 50,
    spreadRadius: 10,
    offset: const Offset(0, 2),
  );

  static BoxShadow horizontalProductShadow = BoxShadow(
    color: FColors.darkGrey.withOpacity(0.1),
    blurRadius: 50,
    spreadRadius: 10,
    offset: const Offset(0, 2),
  );
}
