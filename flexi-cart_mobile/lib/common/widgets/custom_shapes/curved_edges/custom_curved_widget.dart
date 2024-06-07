import 'package:flutter/material.dart';
import 'curved_edges.dart';

class FCustomCurvedWidget extends StatelessWidget {
  const FCustomCurvedWidget({
    super.key,
    this.child,
  });

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    return ClipPath(
      clipper: FCustomCurvedEdges(),
      child: child,
    );
  }
}
