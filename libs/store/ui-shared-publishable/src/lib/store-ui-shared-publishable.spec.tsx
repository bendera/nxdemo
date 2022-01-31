import { render } from '@testing-library/react';

import StoreUiSharedPublishable from './store-ui-shared-publishable';

describe('StoreUiSharedPublishable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreUiSharedPublishable />);
    expect(baseElement).toBeTruthy();
  });
});
