import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/primary_header_container.dart';
import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/search_container.dart';
import 'package:flexi_cart_mobile/common/widgets/texts/section_header.dart';
import 'package:flexi_cart_mobile/features/shop/screens/home/widgets/home_appbar.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

import 'widgets/home_categories.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            FPrimaryHeaderContainer(
              child: Column(
                children: [
                  // App Bar
                  FHomeAppBar(),
                  SizedBox(height: FSizes.spaceBtwSections),

                  // Search Bar
                  FSearchContainer(text: 'Search for Products'),
                  SizedBox(height: FSizes.spaceBtwSections),

                  // Categories
                  Padding(
                    padding: EdgeInsets.only(left: FSizes.defaultSpace),
                    child: Column(
                      children: [
                        // Section Header
                        FSectionHeader(title: 'Popular Categories', showActionButton: false, textColor: FColors.white),
                        SizedBox(height: FSizes.spaceBtwItems),

                        // Categories scrollable list
                        FHomeCategories()
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
