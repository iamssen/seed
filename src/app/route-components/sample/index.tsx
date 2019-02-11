import { useAppContextState } from 'app/context';
import moment from 'moment-timezone';
import React, { useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIntl } from 'use-react-intl';
import { PortalSample } from './components/PortalSample';

const dateFormat: string = 'LLLL';

export default function Sample() {
  const {initialState, locale, timezone} = useAppContextState();
  
  const testString: string = useMemo<string>(() => {
    return initialState && initialState.sample
      ? initialState.sample.testString
      : 'Initial Value';
  }, []);
  
  const {formatMessage} = useIntl();
  
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);
  
  const openPortal: () => void = useCallback(() => {
    if (portal) return;
    
    const div: HTMLDivElement = document.createElement('div');
    document.body.appendChild(div);
    setPortal(div);
  }, [portal]);
  
  return (
    <div>
      {formatMessage({id: 'app.sample.text1'})}
      
      <br/>
      {testString}
      
      <br/>
      <ul>
        <li>
          Local: {moment().locale(locale).format(dateFormat)}
        </li>
        <li>
          Current({timezone.zoneName}): {moment.tz(timezone.zoneName).locale(locale).format(dateFormat)}
        </li>
        <li>
          Asia/Singapore: {moment.tz('Asia/Singapore').locale(locale).format(dateFormat)}
        </li>
      </ul>
      
      <br/>
      <button onClick={openPortal}>
        Open portal
      </button>
      
      <br/>
      {
        portal
          ? createPortal(<PortalSample/>, portal)
          : null
      }
    </div>
  );
}