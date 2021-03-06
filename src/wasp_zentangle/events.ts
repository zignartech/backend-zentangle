// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmclient from '@israel-lpz/wasmclient';
// import { createNanoEvents } from 'nanoevents';
import * as app from './zentagle';

export type IEventsSC = {
  'zentangle.gameEnded': (args: EventGameEnded) => void;
  'zentangle.gameStarted': (args: EventGameStarted) => void;
  'zentangle.imageTagged': (args: EventImageTagged) => void;
  'zentangle.paid': (args: EventPaid) => void;
  'zentangle.playRequested': (args: EventPlayRequested) => void;
};

// export const EventsSC = createNanoEvents<IEventsSC>();

export const eventHandlers: wasmclient.EventHandlers = {
  'zentangle.gameEnded': (msg: string[]) => {
    const args = new EventGameEnded(msg);
    app.onZentangleGameEnded(args);
    // EventsSC.emit('zentangle.gameEnded', args);
  },
  'zentangle.gameStarted': (msg: string[]) => {
    const args = new EventGameStarted(msg);
    app.onZentangleGameStarted(args);
    // EventsSC.emit('zentangle.gameStarted', args);
  },
  'zentangle.imagetagged': (msg: string[]) => {
    const args = new EventImageTagged(msg);
    app.onZentangleImageTagged(args);
    // EventsSC.emit('zentangle.imageTagged', args);
  },
  'zentangle.paid': (msg: string[]) => {
    const args = new EventPaid(msg);
    app.onZentanglePaid(args);
    // EventsSC.emit('zentangle.paid', args);
  },
  'zentangle.playRequested': (msg: string[]) => {
    const args = new EventPlayRequested(msg);
    app.onZentanglePlayRequested(args);
    // EventsSC.emit('zentangle.playRequested', args);
  },
};

export class EventGameEnded extends wasmclient.Event {
  public readonly mission: wasmclient.String;

  public constructor(msg: string[]) {
    super(msg);
    this.mission = this.nextString();
  }
}

export class EventGameStarted extends wasmclient.Event {
  public readonly description: wasmclient.String;
  public readonly numberOfImages: wasmclient.Int32;
  public readonly reward: wasmclient.Int64;
  public readonly tagsRequiredPerImage: wasmclient.Int32;

  public constructor(msg: string[]) {
    super(msg);
    this.description = this.nextString();
    this.numberOfImages = this.nextInt32();
    this.reward = this.nextInt64();
    this.tagsRequiredPerImage = this.nextInt32();
  }
}

export class EventImageTagged extends wasmclient.Event {
  public readonly address: wasmclient.String;
  public readonly imageId: wasmclient.Int32;
  public readonly playsPerImage: wasmclient.Int32;

  public constructor(msg: string[]) {
    super(msg);
    this.address = this.nextString();
    this.imageId = this.nextInt32();
    this.playsPerImage = this.nextInt32();
  }
}

export class EventPaid extends wasmclient.Event {
	public readonly accuracy: wasmclient.String;
	public readonly amount: wasmclient.Uint64;
	public readonly bet: wasmclient.Uint64;
	public readonly boost: wasmclient.Uint8;
  public readonly mission: wasmclient.String;
	public readonly player: wasmclient.String;
	public readonly position: wasmclient.Uint64;
	
	public constructor(msg: string[]) {
		super(msg)
		this.accuracy = this.nextString();
		this.amount = this.nextUint64();
		this.bet = this.nextUint64();
		this.boost = this.nextUint8();
    this.mission = this.nextString();
		this.player = this.nextString();
		this.position = this.nextUint64();
	}
}

export class EventPlayRequested extends wasmclient.Event {
  public readonly address: wasmclient.String;
  public readonly amount: wasmclient.Int64;
  public readonly imageId: wasmclient.Int32;

  public constructor(msg: string[]) {
    super(msg);
    this.address = this.nextString();
    this.amount = this.nextInt64();
    this.imageId = this.nextInt32();
  }
}
