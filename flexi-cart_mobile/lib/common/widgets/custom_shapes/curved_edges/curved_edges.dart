import 'package:flutter/material.dart';

class FCustomCurvedEdges extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    var path = Path();
    path.moveTo(0, size.height);

    // First curve
    final firstControlPoint = Offset(size.width * 0.25, size.height - 30);
    final firstEndPoint = Offset(size.width * 0.5, size.height - 10);
    path.quadraticBezierTo(
      firstControlPoint.dx,
      firstControlPoint.dy,
      firstEndPoint.dx,
      firstEndPoint.dy,
    );

    // Second curve
    final secondControlPoint = Offset(size.width * 0.75, size.height + 10);
    final secondEndPoint = Offset(size.width, size.height - 20);
    path.quadraticBezierTo(
      secondControlPoint.dx,
      secondControlPoint.dy,
      secondEndPoint.dx,
      secondEndPoint.dy,
    );

    // Close path
    path.lineTo(size.width, 0);
    path.lineTo(0, 0);
    path.close();

    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return false; // Return true if the new instance should reclip the path
  }
}
