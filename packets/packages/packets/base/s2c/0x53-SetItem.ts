import BasePacket, { BasePacketModel } from '@workspace/network/packages/packets/base-packet';
import type RelativeDataView from '@workspace/network/packages/relative-data-view';
import SItemPacket, { SItemPacketModel } from '../../shared/SItemPacket';

export type SetItemModel = BasePacketModel & {
	item: SItemPacketModel,
};

export default class SetItem extends BasePacket {
	static create(payload: Partial<SetItemModel>) {
		return super.create(payload);
	}

	static reader(dvr: RelativeDataView, payload: SetItemModel) {
		super.reader(dvr, payload);

		payload.item = SItemPacket.read(dvr);
	}

	static writer(dvr: RelativeDataView, payload: SetItemModel) {
		super.writer(dvr, payload);

		SItemPacket.writer(dvr, payload.item);
	}
}
