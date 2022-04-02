// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import {
  AgentID,
  Arguments,
  ClientFunc,
  ClientView,
  Uint32,
  RequestID,
  Service,
  ViewResults,
  WaspClient,
} from '@israel-lpz/wasmclient';
import * as events from './events';

const ArgDescription = 'description';
const ArgImageId = 'imageId';
const ArgInputJson = 'inputJson';
const ArgNumberOfImages = 'numberOfImages';
const ArgOwner = 'owner';
const ArgPlayerAddress = 'playerAddress';
const ArgResetPlayerInfo = 'resetPlayerInfo';
const ArgTagsRequiredPerImage = 'tagsRequiredPerImage';

const ResImageId = 'imageId';
const ResInfo = 'info';
const ResOwner = 'owner';
const ResPlayerBets = 'playerBets';
const ResPlaysPerImage = 'playsPerImage';
const ResResults = 'results';

///////////////////////////// createGame /////////////////////////////

export class CreateGameFunc extends ClientFunc {
	private args: Arguments = new Arguments();
	
	public description(v: string): void {
		this.args.setString(ArgDescription, v);
	}
	
	public numberOfImages(v: Uint32): void {
		this.args.setUint32(ArgNumberOfImages, v);
	}
	
	public tagsRequiredPerImage(v: Uint32): void {
		this.args.setUint32(ArgTagsRequiredPerImage, v);
	}
	
	public override async post(): Promise<RequestID> {
		this.args.mandatory(ArgDescription);
		this.args.mandatory(ArgNumberOfImages);
		return await super.post(0x585dcce2, this.args);
	}
}

///////////////////////////// endGame /////////////////////////////

export class EndGameFunc extends ClientFunc {
	private args: Arguments = new Arguments();
	
	public resetPlayerInfo(v: boolean): void {
		this.args.setBool(ArgResetPlayerInfo, v);
	}
	
	public override async post(): Promise<RequestID> {
		return await super.post(0xb2303ef2, this.args);
	}
}

///////////////////////////// init /////////////////////////////

export class InitFunc extends ClientFunc {
	private args: Arguments = new Arguments();
	
	public owner(v: AgentID): void {
		this.args.setAgentID(ArgOwner, v);
	}
	
	public override async post(): Promise<RequestID> {
		return await super.post(0x1f44d644, this.args);
	}
}

///////////////////////////// requestPlay /////////////////////////////

export class RequestPlayFunc extends ClientFunc {
	
	public override async post(): Promise<RequestID> {
		return await super.post(0x74f0bf82, null);
	}
}

export class RequestPlayResults extends ViewResults {

	imageId(): Uint32 {
		return this.res.getUint32(ResImageId);
	}
}

///////////////////////////// sendTags /////////////////////////////

export class SendTagsFunc extends ClientFunc {
	private args: Arguments = new Arguments();
	
	public inputJson(v: string): void {
		this.args.setString(ArgInputJson, v);
	}
	
	public override async post(): Promise<RequestID> {
		this.args.mandatory(ArgInputJson);
		return await super.post(0xc31816cb, this.args);
	}
}

export class SendTagsResults extends ViewResults {

	imageId(): Uint32 {
		return this.res.getUint32(ResImageId);
	}
}

///////////////////////////// setOwner /////////////////////////////

export class SetOwnerFunc extends ClientFunc {
	private args: Arguments = new Arguments();
	
	public owner(v: AgentID): void {
		this.args.setAgentID(ArgOwner, v);
	}
	
	public override async post(): Promise<RequestID> {
		this.args.mandatory(ArgOwner);
		return await super.post(0x2a15fe7b, this.args);
	}
}

///////////////////////////// withdraw /////////////////////////////

export class WithdrawFunc extends ClientFunc {
	
	public override async post(): Promise<RequestID> {
		return await super.post(0x9dcc0f41, null);
	}
}

///////////////////////////// getOwner /////////////////////////////

export class GetOwnerView extends ClientView {

	public async call(): Promise<GetOwnerResults> {
		return new GetOwnerResults(await this.callView("getOwner", null));
	}
}

export class GetOwnerResults extends ViewResults {

	owner(): AgentID {
		return this.res.getAgentID(ResOwner);
	}
}

///////////////////////////// getPlayerBets /////////////////////////////

export class GetPlayerBetsView extends ClientView {

	public async call(): Promise<GetPlayerBetsResults> {
		return new GetPlayerBetsResults(await this.callView("getPlayerBets", null));
	}
}

export class GetPlayerBetsResults extends ViewResults {

	playerBets(): string {
		return this.res.getString(ResPlayerBets);
	}
}

///////////////////////////// getPlayerInfo /////////////////////////////

export class GetPlayerInfoView extends ClientView {
	private args: Arguments = new Arguments();
	
	public playerAddress(v: string): void {
		this.args.setString(ArgPlayerAddress, v);
	}

	public async call(): Promise<GetPlayerInfoResults> {
		this.args.mandatory(ArgPlayerAddress);
		return new GetPlayerInfoResults(await this.callView("getPlayerInfo", this.args));
	}
}

export class GetPlayerInfoResults extends ViewResults {

	info(): string {
		return this.res.getString(ResInfo);
	}
}

///////////////////////////// getPlaysPerImage /////////////////////////////

export class GetPlaysPerImageView extends ClientView {
	private args: Arguments = new Arguments();
	
	public imageId(v: Uint32): void {
		this.args.setUint32(ArgImageId, v);
	}

	public async call(): Promise<GetPlaysPerImageResults> {
		this.args.mandatory(ArgImageId);
		return new GetPlaysPerImageResults(await this.callView("getPlaysPerImage", this.args));
	}
}

export class GetPlaysPerImageResults extends ViewResults {

	playsPerImage(): Uint32 {
		return this.res.getUint32(ResPlaysPerImage);
	}
}

///////////////////////////// getResults /////////////////////////////

export class GetResultsView extends ClientView {
	private args: Arguments = new Arguments();
	
	public imageId(v: Uint32): void {
		this.args.setUint32(ArgImageId, v);
	}

	public async call(): Promise<GetResultsResults> {
		this.args.mandatory(ArgImageId);
		return new GetResultsResults(await this.callView("getResults", this.args));
	}
}

export class GetResultsResults extends ViewResults {

	results(): string {
		return this.res.getString(ResResults);
	}
}

///////////////////////////// ZentangleService /////////////////////////////

export class ZentangleService extends Service {
	public constructor(cl: {
    configuration: { seed: null; chainId: any; waspApiUrl: any; waspWebSocketUrl: any; goShimmerApiUrl: any };
    waspClient: WaspClient;
  }) {
    super(cl, 0xf707a9c6, events.eventHandlers);
  }

	public createGame(): CreateGameFunc {
		return new CreateGameFunc(this);
	}

	public endGame(): EndGameFunc {
		return new EndGameFunc(this);
	}

	public init(): InitFunc {
		return new InitFunc(this);
	}

	public requestPlay(): RequestPlayFunc {
		return new RequestPlayFunc(this);
	}

	public sendTags(): SendTagsFunc {
		return new SendTagsFunc(this);
	}

	public setOwner(): SetOwnerFunc {
		return new SetOwnerFunc(this);
	}

	public withdraw(): WithdrawFunc {
		return new WithdrawFunc(this);
	}

	public getOwner(): GetOwnerView {
		return new GetOwnerView(this);
	}

	public getPlayerBets(): GetPlayerBetsView {
		return new GetPlayerBetsView(this);
	}

	public getPlayerInfo(): GetPlayerInfoView {
		return new GetPlayerInfoView(this);
	}

	public getPlaysPerImage(): GetPlaysPerImageView {
		return new GetPlaysPerImageView(this);
	}

	public getResults(): GetResultsView {
		return new GetResultsView(this);
	}
}