import type RelativeDataView from '@workspace/network/packages/relative-data-view';
import ExtendedPacket, { ExtendedPacketModel } from '@workspace/network/packages/packets/extended-packet';

export type SetUndoEnabledModel = ExtendedPacketModel & {
	undoStackSize: number,
};

export default class SetUndoEnabled extends ExtendedPacket {
	static create(payload: Partial<SetUndoEnabledModel>) {
		return super.create(payload);
	}

	static reader(dvr: RelativeDataView, payload: SetUndoEnabledModel) {
		super.reader(dvr, payload);

		payload.undoStackSize = dvr.readUint8();
	}

	static writer(dvr: RelativeDataView, payload: SetUndoEnabledModel) {
		super.writer(dvr, payload);

		dvr.writeUint8(payload.undoStackSize);
	}
}
