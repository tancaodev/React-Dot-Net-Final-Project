import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { CpuComponent } from './CpuComponent';

export const CpuDetail = () => {
  const { state } = useLocation();
  const cpu = state.cpu || {}; // <-- unpack the item from state

  return (
    <div>
      <DropDownMenu />
      <Breadcrumbs />

      <div>This is detail page of CPU</div>
      <CpuComponent cpu={cpu} />
    </div>
  );
};
