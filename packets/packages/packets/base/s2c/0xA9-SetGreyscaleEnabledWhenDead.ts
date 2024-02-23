import BasePacket, { BasePacketModel } from '@workspace/network/packages/packets/base-packet';
import type RelativeDataView from '@workspace/network/packages/relative-data-view';

export type SetGreyscaleEnabledWhenDeadModel = BasePacketModel & {
	enabled: boolean,
};

export default class SetGreyscaleEnabledWhenDead extends BasePacket {
	static create(payload: Partial<SetGreyscaleEnabledWhenDeadModel>) {
		return super.create(payload);
	}

	static bitfield1 = {
		enabled: 1,
	};

	static reader(dvr: RelativeDataView, payload: SetGreyscaleEnabledWhenDeadModel) {
		super.reader(dvr, payload);

		let bitfield1 = dvr.readBitfield(this.bitfield1);
		payload.enabled = bitfield1.enabled;
	}

	static writer(dvr: RelativeDataView, payload: SetGreyscaleEnabledWhenDeadModel) {
		super.writer(dvr, payload);

		dvr.writeBitfield(this.bitfield1, {
			enabled: payload.enabled,
		});
	}
}
