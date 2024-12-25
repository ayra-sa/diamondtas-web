import React from 'react'

function DocumentTitle(title) {
  React.useEffect(() => {
    document.title = `${title} | diamondtas`;
  }, [title]);
}
export default DocumentTitle