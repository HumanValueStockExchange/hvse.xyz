import React from "react";
import {IntlProvider} from "react-intl";

function SimpleLocalize(props) {
  const language = props.pageContext.language;
  const messages = props.pageContext.messages;
  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      <div>{props.children}</div>
    </IntlProvider>
  );
}

export default SimpleLocalize;
