'use babel'
import Vue from 'vue'

Vue.component('tree-structure-view', {
  render (h) {
    return h(
      'div', { class: 'padded tree-structure' }, this.title,
      this.$slots.default // array of children
    )
  },
  data () {
    return {
      title: 'Default Title',
      stucture: []
    }
  },
  created () {
    console.log('Tree structure created')
  }
})

/*
Template:

<ul class='list-tree has-collapsable-children'>
    <li class='list-nested-item'>
        <div class='list-item'>
            <span class='icon icon-file-directory'>A Directory</span>
        </div>

        <ul class='list-tree'>
            <li class='list-nested-item'>
                <div class='list-item'>
                    <span class='icon icon-file-directory'>Nested Directory</span>
                </div>

                <ul class='list-tree'>
                    <li class='list-item'>
                        <span class='icon icon-file-text'>File one</span>
                    </li>
                </ul>
            </li>

            <li class='list-nested-item collapsed'>
                <div class='list-item'>
                    <span class='icon icon-file-directory'>Collapsed Nested Directory</span>
                </div>

                <ul class='list-tree'>
                    <li class='list-item'>
                        <span class='icon icon-file-text'>File one</span>
                    </li>
                </ul>
            </li>

            <li class='list-item'>
                <span class='icon icon-file-text'>File one</span>
            </li>

            <li class='list-item selected'>
                <span class='icon icon-file-text'>File three .selected!</span>
            </li>
        </ul>
    </li>
    <li class='list-item'>
        <span class='icon icon-file-text'>.icon-file-text</span>
    </li>
    <li class='list-item'>
        <span class='icon icon-file-symlink-file'>.icon-file-symlink-file</span>
    </li>
</ul>
*/
