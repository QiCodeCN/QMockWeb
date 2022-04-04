import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '大奇测试开发-Mock系列分享',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'QMockWeb',
          title: 'QMockWeb',
          href: 'https://github.com/mrzcode/QMockWeb',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/mrzcode',
          blankTarget: true,
        },
        {
          key: 'QMockService',
          title: 'QMockService',
          href: 'https://github.com/mrzcode/QMockService',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
