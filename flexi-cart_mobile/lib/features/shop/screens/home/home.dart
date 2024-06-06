import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/circular_containers.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/helpers/helper_functions.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              color: FColors.primary,
              padding: const EdgeInsets.all(0),
              child: SizedBox(
                height: 480,
                child: Stack(
                  children: [
                    Positioned(
                      top: -150,
                      right: -250,
                      child: FCircularContainer(
                        color: FColors.white.withOpacity(0.2),
                      ),
                    ),
                    Positioned(
                      top: 100,
                      right: -300,
                      child: FCircularContainer(
                        color: FColors.white.withOpacity(0.2),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
