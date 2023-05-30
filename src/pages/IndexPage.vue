<template>
  <q-page>
    <div class="bg-pglight q-pa-sm"></div>
    <div class="bg-secondary q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        infinite
        navigation
        padding
        arrows
        height="300px"
        class="bg-secondary rounded-borders"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img class="rounded-borders col-6 full-heigh" src="jpg" />
            <q-img class="rounded-borders col-6 full-height" src="jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img class="rounded-borders col-6 full-height" src="jpg" />
            <q-img class="rounded-borders col-6 full-height" src="jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img class="rounded-borders col-6 full-height" src="jpg" />
            <q-img class="rounded-borders col-6 full-height" src="png" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-sm"></div>
    <div class="text-center myfont text-h4">New article</div>

    <div class="q-pa-md row items-start q-gutter-md myfont">
      <q-card flat bordered class="bg-primary my-card col">
        <q-card-section>
          <div class="text-h6">標題1</div>
          <p>YYYY1/MM1/DD1</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-pt-none"> 摘要1 ... </q-card-section>
      </q-card>
      <q-card flat bordered class="bg-primary my-card col">
        <q-card-section>
          <div class="text-h6">標題2</div>
          <p>YYYY2/MM2/DD2</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-pt-none"> 摘要2 ... </q-card-section>
      </q-card>
      <q-card flat bordered class="bg-primary my-card col">
        <q-card-section>
          <div class="text-h6">標題3</div>
          <p>YYYY3/MM3/DD3</p>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-pt-none"> 摘要3 ... </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
