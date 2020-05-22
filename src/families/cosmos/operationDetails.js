// @flow
import React from "react";
import { useTranslation } from "react-i18next";
import type { Account, OperationType } from "@ledgerhq/live-common/lib/types";
import type { CosmosExtraTxInfo } from "@ledgerhq/live-common/lib/families/cosmos/types";
import LText from "../../components/LText";
import Section, { styles } from "../../screens/OperationDetails/Section";

type Props = {
  extra: CosmosExtraTxInfo,
  type: OperationType,
  account: Account,
};

function OperationDetailsExtra({ extra, type, account }: Props) {
  const { t } = useTranslation();

  switch (type) {
    case "DELEGATE":
      return (
        <Section title={t("operationDetails.extra.validatorAddress")}>
          {/* $FlowFixMe */}
          {extra.validators.map(({ address }) => (
            <LText style={styles.value} semiBold selectable>
              {address}
            </LText>
          ))}
        </Section>
      );
    default:
      return null;
  }
}

export default {
  OperationDetailsExtra,
};
