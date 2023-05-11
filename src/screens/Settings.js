import { StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const difficultyData = [
  { value: null, lable: 'Any Difficulty' },
  { value: 'easy', lable: 'Easy' },
  { value: 'medium', lable: 'Medium' },
  { value: 'hard', lable: 'Hard' },
];

const typeData = [
  { value: null, lable: 'Any Type' },
  { value: 'multiple', lable: 'Multiple Choice' },
  { value: 'boolean', lable: 'True / False' },
];

const categoryData = [
  {
    value: null,
    lable: 'Any Category',
  },
  {
    value: 9,
    lable: 'General Knowledge',
  },
  {
    value: 10,
    lable: 'Entertainment: Books',
  },
  {
    value: 11,
    lable: 'Entertainment: Film',
  },
  {
    value: 12,
    lable: 'Entertainment: Music',
  },
  {
    value: 13,
    lable: 'Entertainment: Musicals & Theatres',
  },
  {
    value: 14,
    lable: 'Entertainment: Television',
  },
  {
    value: 15,
    lable: 'Entertainment: Video Games',
  },
  {
    value: 16,
    lable: 'Entertainment: Board Games',
  },
  {
    value: 17,
    lable: 'Science & Nature',
  },
  {
    value: 18,
    lable: 'Science: Computers',
  },
  {
    value: 19,
    lable: 'Science: Mathematics',
  },
  {
    value: 20,
    lable: 'Mythology',
  },
  {
    value: 21,
    lable: 'Sports',
  },
  {
    value: 22,
    lable: 'Geography',
  },
  {
    value: 23,
    lable: 'History',
  },
  {
    value: 24,
    lable: 'Politics',
  },
  {
    value: 25,
    lable: 'Art',
  },
  {
    value: 26,
    lable: 'Celebrities',
  },
  {
    value: 27,
    lable: 'Animals',
  },
  {
    value: 28,
    lable: 'Vehicles',
  },
  {
    value: 29,
    lable: 'Entertainment: Comics',
  },
  {
    value: 30,
    lable: 'Science: Gadgets',
  },
  {
    value: 31,
    lable: 'Entertainment: Japanese Anime & Manga',
  },
  {
    value: 32,
    lable: 'Entertainment: Cartoon & Animations',
  },
];

const Settings = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDiffuculty, setSelectedDiffuculty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.settings}>
          <Dropdown
            data={categoryData}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            valueField='value'
            labelField='lable'
            placeholder='Any Category'
            onChange={(e) => {
              setSelectedCategory(e.value);
            }}
          />

          <Dropdown
            data={difficultyData}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            valueField='value'
            labelField='lable'
            placeholder='Any Difficulty'
            onChange={(e) => {
              setSelectedDiffuculty(e.value);
            }}
          />

          <Dropdown
            data={typeData}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            valueField='value'
            labelField='lable'
            placeholder='Any Type'
            onChange={(e) => {
              setSelectedType(e.value);
            }}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Quiz', {
                selectedType: selectedType,
                selectedDiffuculty: selectedDiffuculty,
                selectedCategory: selectedCategory,
              })
            }
          >
            <Text style={styles.buttonText}>Let's Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#272D41',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  settings: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 250,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  buttonView: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'chocolate',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 28,
  },
});
