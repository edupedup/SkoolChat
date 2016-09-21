import React from 'react';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import MapComponent from '../MapComponent/MapComponent';

const App = () =>
<div>
  <AutocompleteInput />
    <MapComponent lat="0" long="0" zoom="0"/>
</div>

export default App;
