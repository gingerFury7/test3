<template>
    <div id="app">
        <md-button class="md-icon-button md-raised" @click="initPerson">
            <md-icon>edit</md-icon>
        </md-button>
        <md-dialog :md-active.sync="editting">
            <md-dialog-title>Изменение человека с ID {{  idName  }}</md-dialog-title>

            <md-dialog-content>
                <md-field>
                    <label>Имя</label>
                    <md-input v-model.trim="firstName" type="text" placeholder="First Name"></md-input>
                </md-field>
                <md-field>
                    <label>Фамилия</label>
                    <md-input v-model.trim="secondName" type="text" placeholder="Second Name"></md-input>
                </md-field>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" v-on:click="editPerson">Изменить</md-button>
                <md-button class="md-accent" v-on:click="editCancel">Отмена</md-button>
            </md-dialog-actions>
        </md-dialog>
        <div>
            <md-snackbar :md-duration="1000" :md-active.sync="showGoodSnackbar" md-persistent>
                <p>Изменения сохранены</p>
             </md-snackbar>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PersonModel } from '../modules/PersonModels'

@Component
class dataNew extends Vue{
    @Prop() person!: PersonModel;
    public idName = 0;
    private firstName = '';
    private secondName = '';
    private editting = false;
    private showGoodSnackbar = false;

    public initPerson(): void {
        this.editting = true;
        this.idName = this.person.idName;
        this.firstName = this.person.firstName;
        this.secondName = this.person.secondName;
    }
    public editPerson(): void {
        if ((this.firstName != '') && (this.secondName != '')){
            this.editting = false;
            this.showGoodSnackbar = true;
            this.person.firstName = this.firstName;
            this.person.secondName = this.secondName;
        }
        else{
            alert("Поля 'Имя' или 'Фамилия' не заполенны")
        }
    }
    public editCancel(): void{
        this.editting = false;
    }
}

export default dataNew
</script>