### Blog 博客地址
https://www.robinwieruch.de/react-with-graphql-tutorial

### vimrc 配置

```
set number
filetype plugin indent on
" show existing tab with 4 spaces width
set tabstop=4
" when indeting with '>', use 4 spaces width
set shiftwidth=4
set expandtab

"自动补全
":inoremap ( ()<ESC>i
":inoremap ) <c-r>=ClosePair(')')<CR>
"by Suzzz：  原作者这种设置，输入{会自动补全，并且中间插入一个空行，将光标定位到空行。这对于函数是OK的，但是使用花括号初始化数组、vector时就不方便了。所以改为现在这种。只是补全，然后光标在左右括号中间。
":inoremap { {<CR>}<ESC>O
":inoremap { {}<ESC>i
 
:inoremap } <c-r>=ClosePair('}')<CR>
 
:inoremap [ []<ESC>i
 
:inoremap ] <c-r>=ClosePair(']')<CR>
 
":inoremap " ""<ESC>i
 
":inoremap ' ''<ESC>i
 
function! ClosePair(char)
 
    if getline('.')[col('.') - 1] == a:char
 
        return "\<Right>"
 
    else
 
        return a:char
 
    endif
 
endfunction

call plug#begin('~/.vim/plugged')

Plug 'leafgarland/typescript-vim'
Plug 'udalov/kotlin-vim'
Plug 'pangloss/vim-javascript'
Plug 'mxw/vim-jsx'
Plug 'Valloric/YouCompleteMe'

call plug#end()

```

### 初始化包

```shell
## 安装 cnpm install -g yarn
## yarn配置国内源 yarn config set registry 'https://registry.npm.taobao.org'
yarn
```

### 运行项目

```shell
yarn start
```

