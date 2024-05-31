import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/circular_containers.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            Stack(
              children: [
                Positioned(
                  top: -150,
                  right: -250,
                  child: FCircularContainer(color: FColors.textWhite.withOpacity(0.1)),
                ),
                Positioned(
                  top: 100,
                  right: -300,
                  child: FCircularContainer(color: FColors.textWhite.withOpacity(0.1)),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
