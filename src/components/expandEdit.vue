<template>
    <div>
        <div>
            <md-button class="md-raised md-icon-button" v-on:click="initData">
                <md-icon>edit</md-icon>
            </md-button>
        </div>
        <md-dialog :md-active.sync="editting">
            <md-dialog-title>Изменение student с ID {{  id  }}</md-dialog-title>

            <md-dialog-content>
                <md-field>
                    <label>Имя</label>
                    <md-input v-model.trim="name" type="text"></md-input>
                </md-field>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" v-on:click="editData">Сохранить</md-button>
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
import { IExpandData } from '@/modules/PersonModels'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class expandEdit extends Vue {
    @Prop() expandData!: IExpandData;


    private id = 0;
    private name = '';
    private editting = false;
    private showGoodSnackbar = false;

    public initData (): void {
        this.id = this.expandData.id
        this.name = this.expandData.name;
        this.editting = true;
    }

    public editData(): void{
        if (this.name != ''){
            this.expandData.name = this.name;
            this.editting = false;
            this.showGoodSnackbar = true;
        }
        else {
            alert("Поле имя не заполнено")
        }
    }

    public editCancel(): void {
        this.editting = false;
    }
}
</script>