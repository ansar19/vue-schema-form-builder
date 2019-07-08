<template>
  <div>
    <h5>Vue Form Generator based on schema</h5>
    <form-generator :schema="schema" v-model="formData">
    </form-generator>
      <div class="center">
      <table>
        <thead>
          <tr>
            <th>Your text:</th>
            <th>Selected value in choose:</th>
            <th>You identified Qty:</th>
            <th>Result of sofisticated Qty * select calculation:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {{ formData.textInput }}
            </td>
            <td>
              {{formData.choose}}
            </td>
            <td>
              {{ formData.qty }}
            </td>
            <td>
              {{ result }}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- basic + operation does not work in this demo -->
  </div>
</template>

<script>
import FormGenerator from "../components/calc/FormGenerator";

export default {
  name: "GeneratorDemo",
  components: {
    FormGenerator
  },
  data() {
    return {
      formData: {
        textInput: "Some random text input",
      },
      schema: [{
          fieldType: "TextInput",
          placeholder: "Enter Some text here",
          label: "Some text input",
          name: "textInput"
        },
        {
          fieldType: "SelectList",
          name: "choose",
          multi: false,
          label: "Choose",
          options: [1, 2, 3, 4, 5, 6]
        },
        {
          fieldType: "NumberInput",
          placeholder: "Enter qty",
          name: "qty",
          label: "Qty",
          minValue: 0
        }
      ],
    };
  },
  computed: {
    result() {
      return (this.formData.qty * this.formData.choose).toFixed(2);
    }
  },
};
</script>

<style scoped>
.center {
  margin: auto;
  position: relative;
  text-align: center;
  top: 50%;
  width: 50%;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>

