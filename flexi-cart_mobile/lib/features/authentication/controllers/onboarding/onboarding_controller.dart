import 'package:flutter/material.dart';
import 'package:get/get.dart';

class OnboardingController extends GetxController {
  static OnboardingController get instance => Get.find();

  final pageController = PageController();
  Rx<int> currentPage = 0.obs;

  void updatePageIndicator(index) => currentPage.value = index;

  void dotNavigationClick(index) {
    currentPage.value = index;
    pageController.jumpTo(index);
  }

  void nextPage() {
    if (currentPage.value == 2) {
      // Get.to()
    } else {
      int page = currentPage.value + 1;
      pageController.jumpToPage(page);
    }
  }

  void skip() {
    currentPage.value = 2;
    pageController.jumpToPage(2);
  }
}
