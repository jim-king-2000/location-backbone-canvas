import { Box, Button, CheckBox } from 'grommet';
import { Home, Add, Subtract } from 'grommet-icons';
import { observer } from 'mobx-react';

export const CanvasPluginZoom = observer(({ __map__, tracingMode, onChange, ...props }) => (
  <Box margin='xsmall' gap='xsmall' className='customLayer' {...props}>
    <Button plain={false} icon={<Home />}
      onClick={() => __map__.setFitView()} />
    <Button plain={false} icon={<Add />}
      onClick={() => __map__.zoomIn()} />
    <Button plain={false} icon={<Subtract />}
      onClick={() => __map__.zoomOut()} />
    <CheckBox toggle label='跟踪模式' checked={tracingMode}
      onChange={onChange} />
  </Box>
));