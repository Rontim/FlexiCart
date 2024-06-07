import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/circular_containers.dart';
import 'package:flexi_cart_mobile/common/widgets/custom_shapes/curved_edges/custom_curved_widget.dart';
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
            FCustomCurvedWidget(
              child: Container(
                color: FColors.primary,
                padding: const EdgeInsets.all(0),
                child: SizedBox(
                  height: 400,
                  child: Stack(
                    children: [
                      Positioned(
                        top: -50,
                        right: -100,
                        child: FCircularContainer(
                          width: 200,
                          height: 200,
                          color: FColors.white.withOpacity(0.2),
                        ),
                      ),
                      Positioned(
                        top: 300,
                        right: -150,
                        child: FCircularContainer(
                          width: 200,
                          height: 200,
                          color: FColors.white.withOpacity(0.2),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
