
const renderField = ({ label, keyboardType, name }) => {
    return (<View style={{ flexDirection: 'column', height: 50, marginTop: 15, marginBottom: 15, marginLeft: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#414141', backgroundColor: 'transparent' }}>{label}</Text>
      <TextInput style={{ borderColor: '#AFAFAF', borderWidth: 1, borderRadius: 3, height: 37, width: 300, padding: 5, marginTop: 7 }} keyboardType={keyboardType} />
    </View>);
};

const submit = values => {
  console.log('submitting form', values);
};

const Questionnaire = () => {
    return (
      <ImageBackground
      source={backgroundpic}
      style={styles.backgroundImage}
      >
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.inputViewStyle}>
            <Text style={styles.primaryTitleStyle}>
              SOME QUICK QUESTIONS TO HELP US SET UP YOUR PROFILE
            </Text>
            <Field keyboardType="default" label='How many hours have you slept today?' component={renderField} name="Sleep" />
          <Button onPress={this.props.handleSubmit(submit)}>
            <Text>Click Me! </Text>
          </Button>
          </View>
        </ScrollView>
      </ImageBackground>

    );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
  },
  inputViewStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
    justifyContent: 'flex-start'
  },
  primaryTitleStyle: {
    fontSize: 20,
    color: '#d65cad',
    backgroundColor: 'transparent',
    textAlign: 'center',
    letterSpacing: 0.05

  },
  backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
  },
  cardStyle: {
    backgroundColor: 'transparent'
  }
});
