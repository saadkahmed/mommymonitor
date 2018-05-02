import React from 'react';
import {
  View,
  Text
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { moment } from 'moment';
//import { Card } from 'native-base';

const Formdatepicker = ({ input, label, placeholder }) => {
    return (
        <View>
            <Text>
                {label}
            </Text>
                <DatePicker
                    {...input}
                    placeholder={placeholder}
                    dateFormat="YYYY-MM-DD"
                    selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
                    onChange={this.handleChange}
                />
    </View>
    );
    };
    
export default Formdatepicker;
