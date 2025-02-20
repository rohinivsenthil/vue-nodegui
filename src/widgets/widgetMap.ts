import ButtonConfig from './Button';
import ViewConfig from './View';
import TextConfig from './Text';
import LineEditConfig from './LineEdit';
import ImageConfig from './Image';
import CheckboxConfig from './Checkbox';
import RadioButtonConfig from './RadioButton';
import ScrollAreaConfig from './ScrollArea';
import SliderConfig from './Slider';
import SpinBoxConfig from './SpinBox';
import ProgressBarConfig from './ProgressBar';
import ComboBoxConfig from './ComboBox';
import { ValidNativeWidgets } from './nativeWidget';
import { WidgetConfig } from './config';

type WidgetMap = {
  [key in ValidNativeWidgets]: WidgetConfig<any>
}

const widgetMap: WidgetMap = {
  'vn-button': new ButtonConfig(),
  'vn-line-edit': new LineEditConfig(),
  'vn-image': new ImageConfig(),
  'vn-text': new TextConfig(),
  'vn-view': new ViewConfig(),
  'vn-checkbox': new CheckboxConfig(),
  'vn-radio-button': new RadioButtonConfig(),
  'vn-scroll-area': new ScrollAreaConfig(),
  'vn-slider': new SliderConfig(),
  'vn-spinbox': new SpinBoxConfig(),
  'vn-progress-bar': new ProgressBarConfig(),
  'vn-combobox': new ComboBoxConfig(),
};

const getConfigByType = (type: ValidNativeWidgets) => {
  if (widgetMap[type] === undefined) {
    throw new Error(`invalid widget type ${type}`);
  }
  return widgetMap[type];
};

export default getConfigByType;
