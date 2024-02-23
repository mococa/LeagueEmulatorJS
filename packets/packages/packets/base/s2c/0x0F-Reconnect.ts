import BasePacket, { BasePacketModel } from '@workspace/network/packages/packets/base-packet';
import type RelativeDataView from '@workspace/network/packages/relative-data-view';
import type { ClientId } from '../../types/player';

export type ReconnectModel = BasePacketModel & {
	clientId: ClientId,
};

export default class Reconnect extends BasePacket {
	static create(payload: Partial<ReconnectModel>) {
		return super.create(payload);
	}

	static reader(dvr: RelativeDataView, payload: ReconnectModel) {
		super.reader(dvr, payload);

		payload.clientId = dvr.readUint32();
	}

	static writer(dvr: RelativeDataView, payload: ReconnectModel) {
		super.writer(dvr, payload);

		dvr.writeUint32(payload.clientId);
	}
}
