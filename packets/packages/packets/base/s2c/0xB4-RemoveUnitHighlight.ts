import BasePacket, { BasePacketModel } from '@workspace/network/packages/packets/base-packet';
import type RelativeDataView from '@workspace/network/packages/relative-data-view';
import type { NetId } from '../../types/player';

export type RemoveUnitHighlightModel = BasePacketModel & {
	objectNetId: NetId,
};

export default class RemoveUnitHighlight extends BasePacket {
	static create(payload: Partial<RemoveUnitHighlightModel>) {
		return super.create(payload);
	}

	static reader(dvr: RelativeDataView, payload: RemoveUnitHighlightModel) {
		super.reader(dvr, payload);

		payload.objectNetId = dvr.readUint32();
	}

	static writer(dvr: RelativeDataView, payload: RemoveUnitHighlightModel) {
		super.writer(dvr, payload);

		dvr.writeUint32(payload.objectNetId);
	}
}
