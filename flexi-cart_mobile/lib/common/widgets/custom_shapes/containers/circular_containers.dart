import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flutter/material.dart';

class FCircularContainer extends StatelessWidget {
  const FCircularContainer({
    super.key,
    this.width = 400,
    this.height = 400,
    this.padding = 0,
    this.child,
    this.color = FColors.primaryBackground,
    this.radius = 400,
  });

  final double? width, height;
  final double padding, radius;
  final Widget? child;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: FColors.primary,
      padding: EdgeInsets.all(padding),
      child: Stack(
        children: [
          Container(
            height: height,
            width: width,
            padding: EdgeInsets.all(padding),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(radius),
              color: color,
            ),
            child: child,
          )
        ],
      ),
    );
  }
}
