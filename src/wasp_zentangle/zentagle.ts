// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import * as events from './events';
// import * as service from './zentangleService';

export function onZentangleGameEnded(event: events.EventGameEnded): void {
  console.log('onZentangleGameEnded');
  console.log({ ...event });
}

export function onZentangleGameStarted(event: events.EventGameStarted): void {
  console.log('onZentangleGameStarted');
  console.log({ ...event });
}

export function onZentangleImageTagged(event: events.EventImageTagged): void {
  console.log('onZentangleImageTagged');
  console.log({ ...event });
}

export function onZentanglePaid(event: events.EventPaid): void {
  console.log('onZentanglePaid');
  console.log({ ...event });
}

export function onZentanglePlayRequested(event: events.EventPlayRequested): void {
  console.log('onZentanglePlayRequested : ');
  console.log({ ...event });
}
