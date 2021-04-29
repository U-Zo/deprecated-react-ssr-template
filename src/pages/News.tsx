import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

const titleStyle = css`
  margin: 0;
  font-size: 20px;
  color: orange;
`;

const News = (): JSX.Element => {
  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      <div css={titleStyle}>News</div>
    </div>
  );
};

export default News;
