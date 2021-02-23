<template>
  <div class="hello">
<h1>{{ msg }}</h1>
<van-contact-list
  v-model="chosenContactId"
  :list="list"
  default-tag-text="default"
  @add="onAdd"
  @edit="onEdit"
/>
  </div>
</template>

<script>
export default {
 data() {
    return {
      msg: 'Welcome to Your contact Page',
      chosenContactId: '1',
      list: [
        {
          id: '1',
          name: 'John Ervin',
          tel: 'john@test.com',
          isDefault: true,
        },
        {
          id: '2',
          name: 'Tester 1',
          tel: 'test@test.com',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('Add');
    },
    onEdit(contact) {
      Toast('Edit' + contact.id);
    },
 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
