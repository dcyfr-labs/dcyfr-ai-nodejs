/**
 * @example BasicUsage
 * @description Fundamentals of using @dcyfr/ai in a Node.js application.
 *
 * Demonstrates:
 * - TelemetryEngine initialization with in-memory storage
 * - ValidationFramework setup with gate configuration
 *
 * Prerequisites:
 * - Node.js >= 20
 * - @dcyfr/ai installed
 *
 * Usage:
 *   npx tsx examples/basic-usage.ts
 *
 * @license MIT
 * @copyright DCYFR Labs (https://www.dcyfr.ai)
 */

import { ValidationFramework, TelemetryEngine } from '@dcyfr/ai';

async function basicExample() {
  console.log('🚀 DCYFR AI Basic Example\n');

  // 1. Initialize telemetry (in-memory storage)
  const telemetry = new TelemetryEngine({ storage: 'memory' });
  console.log('✅ Telemetry initialized\n');

  // 2. Initialize validation framework (no gates = pass-through)
  const validation = new ValidationFramework({ gates: [], failureMode: 'warn' });
  console.log('✅ Validation framework initialized\n');

  // 3. Run validation with a minimal context
  const result = await validation.validate({
    projectRoot: process.cwd(),
    files: [],
    config: {},
  });

  if (result.summary.totalViolations === 0) {
    console.log('✅ Validation passed');
    console.log('Gates run:', result.summary.totalGates);
  } else {
    console.log('❌ Validation found violations');
    console.log('Violations:', result.summary.totalViolations);
  }

  // 4. Telemetry engine does not require explicit shutdown
  void telemetry;
  // @expected-output: ✅ Example complete
  console.log('\n✅ Example complete');
}

// Run the example
basicExample().catch(console.error);
